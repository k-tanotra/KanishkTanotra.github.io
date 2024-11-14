import React from 'react'

const LeftRightAnchors = ({ANCHORS}) => {
  const IconList = ANCHORS.LEFTANCHOR.List;
  const {Color} = ANCHORS.LEFTANCHOR.Line;
  const {Text,Link,Line} = ANCHORS.RIGHTANCHOR;
  return (
        <div className="hidden lg:block">
        <div className="fixed bottom-0 left-0 w-[32px] h-[180px]"
        style={{ borderRight: `1px solid  ${Color}`}}></div>
        <div className="fixed bottom-0 right-0 w-[32px] h-[180px]"
         style={{ borderLeft: `1px solid  ${Line.Color}`}}></div>
        <a href={Link} className="fixed bottom-[200px] mb-4 right-0 w-[43px] h-[180px] text-2xl flex items-end justify-center hover:scale-110"
  style={{ writingMode: 'vertical-rl', textAlign: 'center' }}>{Text}</a>
            <div className="fixed bottom-[180px] left-0 w-[64px] flex flex-col items-center space-y-4 text-white p-4">
            {IconList.map((IconData, Index) => (
              <a key={Index} href={IconData.Link}>
                <img 
                  src={IconData.Icon} 
                  alt={IconData.Name} 
                  className="w-[32px] h-[32px] hover:scale-125 ease-in duration-300" 
                />
              </a>
            ))}
            </div>

        </div>
  )
}

export default LeftRightAnchors