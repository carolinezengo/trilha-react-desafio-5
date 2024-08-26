import axios from 'axios';


export const api  = axios.create({
    baseURL: 'https://wbpjxbnlcoeinvheyjil.supabase.co/rest/v1',
    headers: {
      apikey: " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndicGp4Ym5sY29laW52aGV5amlsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNDYxOTM4NiwiZXhwIjoyMDQwMTk1Mzg2fQ.FE7aQAfL90iAT7zaM_TtrMGjdZQIyLmkDQBeJ4OuAwA" ,
     Authorization:" Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndicGp4Ym5sY29laW52aGV5amlsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNDYxOTM4NiwiZXhwIjoyMDQwMTk1Mzg2fQ.FE7aQAfL90iAT7zaM_TtrMGjdZQIyLmkDQBeJ4OuAwA"
    
    }
})
