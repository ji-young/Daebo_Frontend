import proj4 from 'proj4';

var marker = null;
var marker1 = null;
var infowindow = null;

export default function makeMap(){

    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(37.253904, 127.077009), //지도의 중심좌표.
      level: 5 //지도의 레벨(확대, 축소 정도)
    };
    var Mmap = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    var positions = [
      {
          title: '카카오', 
          latlng: new window.kakao.maps.LatLng(33.450705, 126.570677)
      },
      {
          title: '생태연못', 
          latlng: new window.kakao.maps.LatLng(33.450936, 126.569477)
      },
      {
          title: '텃밭', 
          latlng: new window.kakao.maps.LatLng(33.450879, 126.569940)
      },
      {
          title: '근린공원',
          latlng: new window.kakao.maps.LatLng(33.451393, 126.570738)
      }
  ];

  var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다    
      imageSize = new window.kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
      imageOption = {offset: new window.kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
 
 
      var markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
      markerPosition = new window.kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다
      var marker = new window.kakao.maps.Marker({
        position: markerPosition,
        image: markerImage // 마커이미지 설정 
      });
      marker.setMap(Mmap)
      // var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    
  // for (var i = 0; i < positions.length; i ++) {
      
  //   // 마커 이미지의 이미지 크기 입니다
  //   var imageSize = new window.kakao.maps.Size(24, 35); 
      
  //   // 마커 이미지를 생성합니다    
  //   var markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize); 
      
  //     // 마커를 생성합니다
  //   var marker = new window.kakao.maps.Marker({
  //       map: Map, // 마커를 표시할 지도
  //       position: positions[i].latlng, // 마커를 표시할 위치
  //       title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
  //       image : markerImage // 마커 이미지 
  //   });
  //   console.log('asdf')
  //    marker.setMap(Map); 
  // }
}
