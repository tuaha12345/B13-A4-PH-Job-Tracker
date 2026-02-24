function interviewJob(id)
{   

    if(interviewCards.find(x=>x.id===id))
    {
        console.log("Job already in interview list");
        return;
    }
    if(rejectedCards.find(x=>x.id===id))
    {
        rejectedCards = rejectedCards.filter(x=>x.id!==id);
        setInnerText("rejectedCount", rejectedCards.length);
    }
    interviewCards.push(jobs.find(x=>x.id===id));
    updateStatus(id, "interview");
    setInnerText("interviewCount", interviewCards.length);
    console.log(interviewCards);
    console.log('rejectedCards.length', rejectedCards.length);

    
        renderAllJobs();
        renderInterviewJobs();
        renderRejectedJobs();
    
        updateEmptyCard();
        updateJobNumber(rejectedCards.length);
}