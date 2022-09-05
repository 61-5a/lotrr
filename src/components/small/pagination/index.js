import React from 'react';
import { Select } from 'antd';
import styles from './index.module.css';

function Pagination ({ page , setPage }) {
    const changePage = (offset) => {
        setPage({...page,
            page:(page.page+offset)
        })
    }
    const previousPage = () => {
        changePage(-1);
    }
    const nextPage = () => {
        changePage(1);
    }
    const directPageNo = (offset) => {
        setPage({...page,
            page:offset
        })
    }
    const getActivePaginationNo = (numPages,pageNumber) => {
        let content = [];
        if ((pageNumber-2) > 1) {
          content.push(<button key="1" type="button" className="_dot"> ... </button>);
        } if ((pageNumber-2) >= 1) {
          content.push(<button key="2" className="__active" type="button" onClick={() => directPageNo(pageNumber-2)} > {pageNumber-2} </button>);
        } if ((pageNumber-1) >= 1) {
          content.push(<button key="3" className="_active" type="button" onClick={() => directPageNo(pageNumber-1)} > {pageNumber-1} </button>);
        }
        content.push(<button key="4" className="active" type="button" onClick={() => directPageNo(pageNumber)} > {pageNumber} </button>);
        if ((pageNumber+1) <= numPages) {
          content.push(<button key="5" className="active_" type="button" onClick={() => directPageNo(pageNumber+1)} > {pageNumber+1} </button>);
        } if ((pageNumber+2) <= numPages) {
          content.push(<button key="6" className="active__" type="button" onClick={() => directPageNo(pageNumber+2)} > {pageNumber+2} </button>);
        } if ((pageNumber+2) < numPages) {
          content.push(<button key="7" type="button" className="dot_"> ... </button>);
        }
        return content;
      };
      const { Option } = Select;
      const handleChange = (value) => {
        setPage({...page,
            limit:value
        })
      };
    return (
        <div className={styles.page_bottom}>
            <span className={styles.pagination}>
              <button type="button" disabled={page.page <= 1} onClick={previousPage} > ‹ </button>
              <span className={styles.getpageno}> {getActivePaginationNo(page.pages,page.page)} </span>
              <button type="button" disabled={page.page >= page.pages} onClick={nextPage} > › </button>
            </span>
            <span className={styles.page}>{page.page} of {page.pages}</span>
            <span className={styles.limit}>
                <Select
                defaultValue={page.limit}
                style={{
                    width: 80,
                }}
                onChange={handleChange}
                >
                  <Option value="5">5</Option>
                  <Option value="10">10</Option>
                  <Option value="15">15</Option>
                  <Option value="20">20</Option>
                  <Option value="50">50</Option>
                  <Option value="100">100</Option>
                  <Option value="200">200</Option>
                  <Option value="500">500</Option>
                  <Option value="1000">1000</Option>
                </Select>
            </span>
            {/* <div>page: {page.page} of {page.pages} and limit: {page.limit}</div> */}
        </div>
    )
}
export default Pagination;