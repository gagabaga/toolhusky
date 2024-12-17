if (document.querySelector('.discord-token-login-popup')) {
    
const btnGerravilla = document.querySelector('#btnTerravilla');
const btnCHinterior = document.querySelector('#btnCHinterior');
const btnMiningDungeon = document.querySelector('#btnMiningDungeon')
const btbCarnival = document.querySelector('#btbCarnival')
const btnGuildhallinterior = document.querySelector('#btnguildhallinterior');
const btnPostOfficeInterior = document.querySelector('#btnPostOfficeInterior');
const btnSpaceWalk = document.querySelector('#btnSpaceWalk');
const btnBarneysFarm = document.querySelector('#btnBarneysFarm');
const btnLand = document.querySelector('#btnLand');

btnGerravilla.addEventListener('click', () => {
	 window.open("https://play.pixels.xyz?movemap=terravilla", '_blank');
});

btnCHinterior.addEventListener('click', () => {
	window.open("https://play.pixels.xyz?movemap=CHinterior", '_blank');
});

btnMiningDungeon.addEventListener('click', () => {
	window.open("https://play.pixels.xyz?movemap=MiningDungeon", '_blank');
});

btbCarnival.addEventListener('click', () => {
	window.open("https://play.pixels.xyz?movemap=carnival", '_blank');
});

btnGuildhallinterior.addEventListener('click', () => {
	 window.open("https://play.pixels.xyz?movemap=guildhallinterior", '_blank');
});

btnPostOfficeInterior.addEventListener('click', () => {
	window.open("https://play.pixels.xyz?movemap=PostOfficeInterior", '_blank');
});

btnSpaceWalk.addEventListener('click', () => {
	window.open("https://play.pixels.xyz?movemap=SpaceWalk", '_blank');
});

btnBarneysFarm.addEventListener('click', () => {
	window.open("https://play.pixels.xyz?movemap=barneysFarm", '_blank');
});

btnLand.addEventListener('click', () => {
	land = document.querySelector('#txtLand').value;
	if (land != '') {
		window.open("https://play.pixels.xyz?movemap=pixelsNFTFarm-"+land, '_blank');
	} 
});
}