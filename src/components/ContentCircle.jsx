import React, { memo } from 'react'

const ContentCircle = () => {
    let textPath = `<textPath xlink:href="#circle">
    Purna Sai Web Design and Development
  </textPath>`;
  return (
    <div className="cm-content-circle">
                <svg
                  className="circle"
                  viewBox="0 0 100 100"
                  width="120"
                  height="120"
                >
                  <defs>
                    <path
                      id="circle"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    ></path>
                  </defs>
                  <text dangerouslySetInnerHTML={{ __html: textPath }}></text>
                </svg>
                <div className="circle-logo">
                  <img src="assets/img/logo/PS-logo.svg" alt="" />
                </div>
              </div>
  )
}

export default memo(ContentCircle)