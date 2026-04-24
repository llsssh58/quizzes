const quizzes = {
    "웹시스템개론": [
        { q: "www와 관련이 가장 적은 것은?", o: [" 하이퍼미디어", "HTTP", "웹브라우저", "AR"], a: 3 },
        { q: "다음 관계가 옳지 않은 것은?", o: ["사물인터넷 - IOT", "온라인 동영상 스트리밍 서비스 - OTT", "사용자제작콘텐츠 - UCC", "음성인식 – EV"], a: 3 },
        { q: "인공지능과 가장 관련이 적은 것은", o: ["음성인식", "VR", " 기계학습", "자연어처리"], a: 1 },
        { q: "개념이 가장 큰 것은?", o: ["MR", "VR", "XR", "AR"], a: 2 },
        { q: "컴퓨터 하드웨어를 구성하는 요소 중 연산장치와 제어장치로 구성된 것은?", o: ["주기억장치", "기억장치", "보조기억장치", "출력장치"], a: 1 },
        { q: "최초의 전자식 진공관 컴퓨터는?", o: ["에드삭", "에드박", "마크-Ⅰ", "에니악"], a: 3 },
        { q: "보조기억장치가 아닌 것은?", o: ["USB", "SSD", "RAM", "하드디스크"], a: 2 },
        { q: "응용소프트웨어가 아닌 것은?", o: ["파워포인트", "엑셀", "SQL서버", "Linux"], a: 3 },
        { q: "정보의 크기를 나타내는 것이 아닌 것은?", o: ["비트", "바이트", "보수", "워드"], a: 2 },
        { q: "정보의 처리단위 크기를 바르게 나타낸 것은 무엇인가?", o: ["비트<니블<바이트<워드", " 니블<비트<워드<바이트", " 비트<바이트<니블<워드", "니블<워드<비트<바이트"], a: 0 },
        { q: "국제 표준 문자 코드가 아닌 것은?", o: ["아스키코드", "WWW", "EBCDIC", "유니코드"], a: 1 },
        { q: "부동소수를 단정도 형식으로 저장하는 경우, 지수부에 사용하는 저장 방식은?", o: ["127 편향지수", "1023 편향지수", "1의 보수", "2의 보수"], a: 0 },
        { q: "전원이 꺼지면 저장된 내용이 모두 사라지는 소멸성 기억장치이며, 정보의 쓰기와 읽기가 가능한 것은?", o: ["플레쉬메모리", "하드디스크", "RAM", "ROM"], a: 2 },
        { q: "속도가 빠른 것부터 나열한 것은?", o: ["보조기억장치>주기억장치>캐시메모리>레지스터", "레지스터>주기억장치>캐시메모리>보조기억장치", "주기억장치>캐시메모리>보조기억장치>레지스터", "레지스터>캐시메모리>주기억장치>보조기억장치"], a: 3 },
        { q: "중앙처리 장치의 구성요소만을 나열한 것은?", o: ["연산장치, 제어장치, 레지스터", "레지스터, 중앙장치, 보조기억장치", "캐시메모리, 레지스터, 제어장치", "제어장치, 연산장치, 플래쉬 메모리"], a: 0 },
        { q: "CPU의 처리속도에 가장 적은 영향을 미치는 요인은?", o: ["레지스터의 크기", "버스 폭(너비)", "캐시 메모리", "하드디스크 크기"], a: 3 },
        { q: "다음 중 개인용 컴퓨터에 해당되는 운영체제로 가장 보기 어려운 것은?", o: ["MS-DOS", "Unix 계열", "Linux 계열", "Mac OS"], a: 1 },
        { q: "운영체제의 목적으로 가장 적합한 것은?", o: ["소프트웨어를 개발하기 위한 필요 환경을 제공하기 위함이다.", " 각기 필요한 업무를 원활하게 소화하기 위함이다.", "컴퓨터 시스템의 자원들을 효율적으로 관리하여 시스템의 성능을 최적화하기 위함이다.", "많은 업무를 동시에 처리할 수 있도록 하기 위함이다."], a: 2 },
        { q: "파일 관리자의 기능으로 옳지 않은 것은?", o: ["파일의 접근을 제어한다.", "파일을 여러 사용자가 공유하는 기법을 제공하지 못한다.", "파일의 생성, 삭제, 수정을 감독한다.", "파일을 디스크 어디에 저장할 지를 감독한다."], a: 1 },
        { q: "탐색기에서 자주 사용하는 문서나 파일을 연결해 놓은 것은?", o: ["가상 데스크톱", "레이아웃", "옵션", "바로가기"], a: 3 },
        { q: "주어진 현재 상황에서 보상을 최대화 하도록 다음 행동을 학습시키는 방법은?", o: ["지도 학습", "비지도 학습", "반지도 학습", "강화 학습"], a: 3 },
        { q: "지도 학습 알고리즘으로만 구성된 것은?", o: ["K-평균 군집화, KNN", " K-평균 군집화, 차원 축소", "KNN, K-평균 군집화", "선형 모델, KNN"], a: 3 },
        { q: "퍼셉트론이 학습을 수행해 구하는 값은?", o: ["가중치, 편향", "가중치, 출력값", "입력값, 출력값", "입력값, 편향"], a: 0 },
        { q: "인공신경망에서 학습 지표인 목표값의 함수가 아닌 것은?", o: ["손실 함수", "비용 함수", "목적 함수", "활성화 함수"], a: 3 },
        { q: "컴퓨팅 사고력의 구성 요소가 아닌 것은?", o: ["자료 분석과 표현", "자동화", " 문제 융합", "알고리즘"], a: 2 },
        { q: "의사코드와 순서도는 컴퓨팅 사고력의 어느 구성 요소에서 사용되는가?", o: ["문제 분할", "자료 표현", "자료 수집", "알고리즘"], a: 3 },
        { q: "알고리즘을 표준화된 기호 및 도형으로 도식화하여 데이터의 흐름과 수행되는 절차들의 순서를 표현하는 방법은?", o: ["순서도", "의사코드", "슈도 코드", "자연 언어"], a: 0 },
        { q: "스마트폰에서 실행되는 앱을 개발하는 교육용 개발도구는?", o: ["스크래치", "엔트리", "앱 인벤터", "블록리"], a: 2 }
    ],
    "C언어": [
        { q: "컴퓨터에 작업을 시키려고 명령어를 모아 놓은 것을?", a: "함수" },
        { q: "프로그램을 만드는 작업을?", a: "프로그래밍" },
        { q: "컴퓨터가 이해할 수 있는 언어로, 이진코드(0과1)로 이루어진 언어를?", a: "기계어" },
        { q: "프로그래밍 언어로 작성된 소스 코드를 컴퓨터가 실행할 수있는 기계어로 번역하여 실행파일을 만드는 프로그래밈을?", a: "컴파일러" },
        { q: "C언어로 작성한 소스 파일 확장자는?", a: ".c" },
        { q: "C언어의 소스 코드에서 메모역할을 하는것은?", a: "주석" },
        { q: "라이브라리에서 서로 관련있는 함수를 모아놓은 파일을?", a: "헤더파일" },
        { q: "printf() 함수처럼 입출력에 관련된 라이브러리를 모아놓은 헤더파일의 이름은?", a: ".h" },
        { q: "printf() 함수처럼 줄바꿈에 해당하는 제어문자는?", a: "\\n" },
        { q: "printf() 함수처럼 탭에 해당하는 제어문자는?", a: "\\t" },
        { q: "printf() 함수처럼 화면에 퍼센트(%)를 출력하려면?", a: "%%" },
        { q: "printf() 함수처럼 화면에 큰따옴표를 출력하려면?", a: "\"" },
        { q: "단 한개라도 거짓(F)?", a: "AND" },
        { q: "1,2,3,4처럼 셀 수 있는 숫자를 담을 수 있는 자료형을 나타내는 예약어는?", a: "정수형" },
        { q: "1.3,  23.34처럼 실수를 담을 수 있는 자료형을 나타내는 예약어는?", a: "실수형" },
        { q: "‘A’,’B’,’C’처럼 문자를 담을 수 있는 자료형을 나타내는 예약어는", a: "문자형" },
        { q: "int 정수형 서식문자는?", a: "%d" },
        { q: "float 실수형 서식문자는?", a: "%f" },
        { q: "char 문자형 서식문자는?", a: "%c" },
        { q: " 대입연산자는?", a: "=" },
        { q: " 나열연산자는?", a: "," },
        { q: "short형의 정수 출력할때 사용하는 서식문자는?", a: "%d" },
        { q: "%ld은 어떤 형일까요?", a: "long" },
        { q: "%lld은 어떤 형일까요?", a: "long long" },
        { q: "unsigned short는 어떤 서식문자는?", a: "%hu" },
        { q: "++ 연산자의 피연산자는?", a: "변수" },
        { q: "--피연산자는 숫자를 1만큰 증가 시킨후 다음 연산 수행을 한다?(네/아니요)", a: "아니요", },
        { q: "피연산자++ 모든 연산을 수행한 후 1만큼 증가 시키는가?(네/아니요)", a: "네", },
        { q: "rand() 함수를 사용할때 포함해야하 헤더파일의 이름은?", a: "stdlib.h", },
        { q: "작업을 중단하고 블록을 빠져나오는 예약어는?", a: "break", },
        { q: "switch문의 case 끔에 사용하는 기호는?", a: ":", },
        { q: "이후 실행문은 무시하고 다음번 반복으로 건너뛰는 예약어는?", a: "continue", },
        { q: "while문으로 무한반복을 구현하려면?", a: "while", },
    ]
};

let quiz = [], index = 0, score = 0, selected = null, mode = "mcq";
let time = 60, timer;
let wrong = [];

/* 버튼 생성 */
const list = document.getElementById("quizList");

Object.keys(quizzes).forEach(name => {
    const btn = document.createElement("button");
    btn.innerText = name;
    btn.onclick = () => start(name);
    list.appendChild(btn);
});

/* 시작 */
function start(name) {
    quiz = [...quizzes[name]];
    index = 0;
    score = 0;
    wrong = [];

    mode = (name === "웹시스템개론") ? "mcq" : "text";

    show("quiz");
    load();
}

/* 문제 로드 */
function load() {
    selected = null;
    const q = quiz[index];

    document.getElementById("question").innerText = `Q${index + 1}. ${q.q}`;

    const box = document.getElementById("options");
    box.innerHTML = "";

    const feedback = document.getElementById("feedback");
    feedback.innerText = "";
    feedback.className = "";

    if (mode === "mcq") {
        q.o.forEach((v, i) => {
            let div = document.createElement("div");
            div.className = "option";
            div.innerText = v;

            div.onclick = () => {
                document.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
                div.classList.add("selected");
                selected = i;
            };

            box.appendChild(div);
        });
    } else {
        box.innerHTML = `<input id="answerInput" placeholder="답 입력">`;
        document.getElementById("answerInput")
            .addEventListener("keydown", e => {
                if (e.key === "Enter") next();
            });
    }

    startTimer();
}

/* 타이머 */
function startTimer() {
    clearInterval(timer);
    time = 60;
    document.getElementById("timer").innerText = `⏱ ${time}s`;

    timer = setInterval(() => {
        time--;
        document.getElementById("timer").innerText = `⏱ ${time}s`;

        if (time <= 0) {
            clearInterval(timer);
            next();
        }
    }, 1000);
}

/* 다음 */
function next() {
    clearInterval(timer);

    const q = quiz[index];
    let correct = false;

    if (mode === "mcq") {
        if (selected === null) return; // 선택 안 했으면 무시
        correct = selected === q.a;
    } else {
        let input = document.getElementById("answerInput").value.trim();
        if (!input) return;
        correct = input.toLowerCase() === q.a.toLowerCase();
    }

    const feedback = document.getElementById("feedback");

    if (correct) {
        score++;
        feedback.innerText = "✅ 정답!";
        feedback.className = "correct";
    } else {
        wrong.push(q);
        let answer = (mode === "mcq") ? q.o[q.a] : q.a;
        feedback.innerText = `❌ 오답! 정답: ${answer}`;
        feedback.className = "wrong";
    }

    // 선택지 색상 표시
    if (mode === "mcq") {
        document.querySelectorAll(".option").forEach((el, i) => {
            if (i === q.a) el.classList.add("correct");
            else if (i === selected) el.classList.add("wrong");
        });
    }

    // 자연스럽게 다음 문제
    setTimeout(() => {
        index++;
        if (index < quiz.length) {
            fadeOut(() => load());
        } else {
            finish();
        }
    }, 1200);
}

/* 결과 */
function finish() {
    show("result");

    let html = `${quiz.length}문제 중 ${score}개 맞음`;

    if (wrong.length > 0) {
        html += `<br><button onclick="retryWrong()">틀린 문제 다시 풀기</button>`;
    }

    document.getElementById("score").innerHTML = html;
}

/* 틀린 문제 다시 */
function retryWrong() {
    quiz = [...wrong];
    wrong = [];
    index = 0;
    score = 0;
    show("quiz");
    load();
}

/* 페이드 효과 */
function fadeOut(callback) {
    const qBox = document.getElementById("question");
    qBox.style.opacity = 0;

    setTimeout(() => {
        callback();
        qBox.style.opacity = 1;
    }, 200);
}

/* 화면 전환 */
function show(id) {
    ["start", "quiz", "result"].forEach(v => {
        document.getElementById(v).classList.add("hidden");
    });
    document.getElementById(id).classList.remove("hidden");
}

/* 처음 */
function restart() {
    show("start");
}