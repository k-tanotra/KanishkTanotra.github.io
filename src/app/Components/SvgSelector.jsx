import React from 'react'

const SvgSelector = ({data}) => {
    const {type,colors} = data;
    let svgFinal;

    switch(type){
        case 'waves':
            svgFinal = (<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' fill={colors[0]}>
                            <rect fill={colors[1]} width="100%" height="100%"/>
                            <path d='M0 0v100c166.7 0 166.7-66 333.3-66S500 77 666.7 77 833.3 28 1000 28V0H0Z' opacity='.5'></path>
                            <path d='M0 0v100c166.7 0 166.7-66 333.3-66S500 70 666.7 70 833.3 16 1000 16V0H0Z' opacity='.5'></path>
                            <path d='M0 0v100c166.7 0 166.7-66 333.3-66S500 63 666.7 63 833.3 4 1000 4V0H0Z'></path>
                        </svg>);
            break;
        case 'waves2':
            svgFinal = (<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' fill={colors[0]}>
                        <rect fill={colors[1]} width="100%" height="100%"/>
                        <path d='M500 80.7C358 68 0 4 0 4V0h1000v84.7c-216 23.3-358 8.6-500-4Z' opacity='.3'></path>
                        <path d='M500 65.7C358 53 0 4 0 4V0h1000v62.7c-216 23.3-358 15.6-500 3Z' opacity='.5'></path>
                        <path d='M500 50.7C358 38 0 4 0 4V0h1000v40.7C784 64 642 63.3 500 50.7Z'></path>
                    </svg>);
            break;
        case 'waves3':
            svgFinal = (<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' fill={colors[0]}>
                        <rect fill={colors[1]} width="100%" height="100%"/>
                        <path d='M1000 100C500 100 500 64 0 64V0h1000v100Z' opacity='.5'></path>
                        <path d='M1000 100C500 100 500 34 0 34V0h1000v100Z' opacity='.5'></path>
                        <path d='M1000 100C500 100 500 4 0 4V0h1000v100Z'></path>
                    </svg>);
            break;
        case 'type4':
            svgFinal = <div>type 4</div>;
            break;
        default:
            svgFinal = <div></div>;
    }
    return svgFinal;
}

export default SvgSelector