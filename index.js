let jobList=[];
let rejectList=[];
let currentStatus='all'



let sum = document.getElementById('sum');
let sumInterview = document.getElementById('sumInterview');
let sumReject = document.getElementById("sumReject");
let jobCount = document.getElementById("jobCount");

const newALL = document.getElementById('newAll');
const interview = document.getElementById('interview');
const reject = document.getElementById('reject');


const mainContainer = document.querySelector('main');
const addSection = document.getElementById('addSection');
const allCardSection = document.getElementById('allCards');
const otherSection=document.getElementById('otherSection');

function calcCount(){
    sum.innerText=allCards.children.length;
    sumInterview.innerText=jobList.length
    sumReject.innerText=rejectList.length
}
calcCount()



function toggleStyle(id) {
    newALL.classList.add('bg-white', 'text-black')
    interview.classList.add('bg-white', 'text-black')
    reject.classList.add('bg-white', 'text-black')

    newALL.classList.remove('bg-blue-500', 'text-white')
    interview.classList.remove('bg-blue-500', 'text-white')
    reject.classList.remove('bg-blue-500', 'text-white')
    const selected = document.getElementById(id);
    currentStatus=id;
    console.log(currentStatus)
    selected.classList.remove('bg-white', 'text-black')
    selected.classList.add('bg-blue-500', 'text-white')

    if(id == 'interview'){
        allCardSection.classList.add('hidden');
        addSection.classList.remove('hidden');
        otherSection.classList.remove('hidden')
        newSection()
    }else if(id=='newAll'){
        allCardSection.classList.remove('hidden');
        addSection.classList.add('hidden');
        otherSection.classList.add('hidden')

    }else if(id=='reject'){
        allCardSection.classList.add('hidden')
        addSection.classList.remove('hidden')
        otherSection.classList.remove('hidden')
        newRejection()
    }
}


mainContainer.addEventListener('click', function (event){
    
    if (event.target.classList.contains('btn-first')){
        const parentNode = event.target.parentNode.parentNode;

        const offName = parentNode.querySelector('.offName').innerText
        const jobName = parentNode.querySelector('.jobName').innerText
        const jobDetails = parentNode.querySelector('.jobDetails').innerText
        const status = parentNode.querySelector('.status').innerText
        const notes = parentNode.querySelector('.notes').innerText
        parentNode.querySelector('.status').innerText = 'Interview'
        
        const cardInfo = {
            offName,
            jobName,
            jobDetails,
            status:'interview',
            notes
        }
        const jobExist = jobList.find(item => item.offName == cardInfo.offName)
        if (!jobExist) {
            jobList.push(cardInfo)
        }
        rejectList = rejectList.filter(item => item.offName != cardInfo.offName)
        if (currentStatus == 'btn-second') {
            newRejection()
        }
        calcCount()
    }
    else if(event.target.classList.contains('btn-second')){
        const parentNode = event.target.parentNode.parentNode;

        const offName = parentNode.querySelector('.offName').innerText
        const jobName = parentNode.querySelector('.jobName').innerText
        const jobDetails = parentNode.querySelector('.jobDetails').innerText
        const status = parentNode.querySelector('.status').innerText
        const notes = parentNode.querySelector('.notes').innerText
        parentNode.querySelector('.status').innerText = 'Reject'
        
        const cardInfo = {
            offName,
            jobName,
            jobDetails,
            status:'Reject',
            notes
        }
        const jobExist = rejectList.find(item => item.offName == cardInfo.offName)
        if (!jobExist) {
            rejectList.push(cardInfo)
        }
         jobList = jobList.filter(item => item.offName != cardInfo.offName)
        if (currentStatus == "btn-first") {
            newSection()
        }

        calcCount()
    }
})


function newSection(){
    addSection.innerHTML=''
    for(let job of jobList){
        console.log(job);
        let div=document.createElement('div')
        div.className=''
        div.innerHTML=`
                   <div class="card flex mt-[16px] p-[24px] mb-[16px] bg-white">
                <div>
                    <h3 class="offName font-bold">${job.offName}</h3>
                    <p class="jobName">${job.jobName}</p><br>
                    <p class="jobDetails">R${job.jobDetails}</p><br>
                    <h3 class="status heading w-[113px] h-[36px]">${job.status}</h3>
                    <p class="notes">${job.notes}</p><br>
                    <button class="btn-first font-semibold">Interview</button>
                    <button class="btn-second font-semibold">Rejected</button>
                </div>
                <div>
                    <img class="delete-btn" src="/Group 1.png" alt="">
                </div>
            </div>

           
            `
            addSection.appendChild(div);
    }
    
}

function newRejection(){
    addSection.innerHTML=''
    for(let reject of rejectList){
        console.log(reject);
        let div=document.createElement('div')
        div.innerHTML=`
                   <div class="card flex mt-[16px] p-[24px] mb-[16px] bg-white">
                <div>
                    <h3 class="offName font-bold">${reject.offName}</h3>
                    <p class="jobName">${reject.jobName}</p><br>
                    <p class="jobDetails">${reject.jobDetails}</p><br>
                    <h3 class="status heading w-[113px] h-[36px]">${reject.status}</h3>
                    <p class="notes">${reject.notes}</p><br>
                    <button class="btn-first font-semibold">Interview</button>
                    <button class="btn-second font-semibold">Rejected</button>
                </div>
                <div>
                    <img class="delete-btn" src="/Group 1.png" alt="">
                </div>
            </div>

            
            `
            addSection.appendChild(div);
    }
    
}
document.addEventListener("click", function (icon) {
  if (icon.target.closest(".delete-btn")) {
    icon.target.closest(".card").remove();
  }
  calcCount()
});