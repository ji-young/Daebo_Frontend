import React, {useEffect} from 'react'
import makeMap from 'map/map'

export default function Trip () {

useEffect(() => { // didmounthook
    makeMap()
});
    return(
        <div id="map" style={{width:500+'px'} ,{height:400+'px'}} >
            <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=84b050274e5e1c6da8d55c7ad12c0feb&libraries=services"></script>
        </div>
    )
}