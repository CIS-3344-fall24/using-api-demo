import React, { useEffect, useState } from 'react'

const CatFacts = () => {
    const [catFact, setCatFact] = useState("");

    const fetchFact = async() => {
        try{
            const response = await fetch(`https://meowfacts.herokuapp.com/`);
            if(!response.ok) throw new Error(`Cat fact failed to fetch`);
            console.log(response);
            const data = await response.json();
            setCatFact(data);
            console.log(data);
        }catch(error){
            console.error(error.message);
        }
    }

    useEffect(() => {
        fetchFact();
    }, []);


  return (
    <div>
        <h2>Cat Facts!</h2>
        {catFact && (
            <div> 
                <p>{catFact.data}</p>
            </div>
        )
        }
    </div>
  )
}

export default CatFacts