
let mapContainer = document.getElementById('map'), // 지도를 표시할 div
	    mapOption = {
	        center: new kakao.maps.LatLng(37.503106, 127.024264), // 지도의 중심좌표
	        level: 3, // 지도의 확대 레벨
	        mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
	    };
	// 지도를 생성한다
	let map = new kakao.maps.Map(mapContainer, mapOption);
	// 지도 타입 변경 컨트롤을 생성한다
	let mapTypeControl = new kakao.maps.MapTypeControl();
	// 지도의 상단 우측에 지도 타입 변경 컨트롤을 추가한다
	map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
	// 지도에 확대 축소 컨트롤을 생성한다
	let zoomControl = new kakao.maps.ZoomControl();
	// 지도의 우측에 확대 축소 컨트롤을 추가한다
	map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
	// 지도에 마커를 생성하고 표시한다
	let marker = new kakao.maps.Marker({
	    position: new kakao.maps.LatLng(37.503106, 127.024264), // 마커의 좌표
	    draggable : true, // 마커를 드래그 가능하도록 설정한다
	    map: map // 마커를 표시할 지도 객체
	});
	// 마커 위에 표시할 인포윈도우를 생성한다
	let infowindow = new kakao.maps.InfoWindow({
	    content : '점프 투 코딩' // 인포윈도우에 표시할 내용
	});
	// 인포윈도우를 지도에 표시한다
	infowindow.open(map, marker);

