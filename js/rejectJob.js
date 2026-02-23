function rejectJob(id)
{   
    if(rejectedCards.find(x=>x.id===id))
    {
        console.log("Job already in rejectJob list");
        return;
    }
    if(interviewCards.find(x=>x.id===id))
    {
        interviewCards = interviewCards.filter(x=>x.id!==id);
        setInnerText("interviewCount", interviewCards.length);
        
    }
    rejectedCards.push(jobs.find(x=>x.id===id));
    updateStatus(id, "rejected");
    setInnerText("rejectedCount", rejectedCards.length);
    console.log(rejectedCards);

        
        renderAllJobs();
        renderInterviewJobs();
        renderRejectedJobs();
    
}