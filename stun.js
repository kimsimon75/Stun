
const unitSort = ['희귀함','전설적인','히든','초월함','불멸의','영원한','제한됨','랜덤'];

const unitState = [
    [['바제스',1.3, 2.706, 0.1, 0.9, 0, 0, 0, 0, 0],
    ['아오키지',1.3, 2.447, 0.1, 0.95, 0, 0, 0, 0,0],
    ['이완코브',1.3, 2.421, 0.07, 1.4, 0, 0, 0, 0, 0],
    ['우솝', 1.3, 2.3, 0.1, 1.15, 0, 0, 0, 0, 0]],

    [['드래곤'],
    ['라분'],
    ['바르톨로메오'],
    ['샹크스'],
    ['시키'],
    ['쿠마'],
    ['후지토라']],

    [['봉쿠레'],
    ['아오키지'],
    ['이완코브'],
    ['피셔타이거'],],

    [['로빈'],
    ['시라호시'],
    ['샹크스'],
    ['아오키지'],
    ['조로'],
    ['키자루'],
    ['후지토라'],],

   [ ['거프'],
    ['드래곤'],
    ['센고쿠'],
    ['센고쿠(특강)'],
    ['시키'],
    ['흰수염'],],

    [['니카'],
    ['우타'],
    ['카벤딧슈'],
    ['핸콕'],
    ['핸콕(특강)'],],

    [['크로커다일'],],
    
    [['K'],
    ['나루토'],
    ['미나토'],
    ['타츠마키'],],
    
];

const Unit = unitState[0].length + unitState[1].length + unitState[2].length + unitState[3].length + unitState[4].length + unitState[5].length + unitState[6].length + unitState[7].length;
const container = document.getElementById("container");
const width = container.clientWidth; // 부모 요소의 너비 가져오기

console.log("유닛 정보:",unitSort[0]);
for (var i = 0; i < 3; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "div";
    newDiv.id = `div${i}`;
    newDiv.style.width = (width / 3 - 2) + "px"; // div 너비 설정
    container.appendChild(newDiv);
}

for(var i=0;i<Unit+8;i++)
{
    const newChild = document.createElement("div");
    newChild.className = "unitSort";
    newChild.innerText = unitSort[0];
    newChild.style.height = (parseInt(getComputedStyle(container).height)/20-2) + "px"; // px 단위 추가

    document.getElementById(`div${Math.floor(i/20)}`).appendChild(newChild);
}