const url = 'http://localhost:3000/data'

export	const asyncPostCall = async (bodyReguest) => {
            try {
                const res = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    body: JSON.stringify(bodyReguest)
                });
                if (!res.ok) console.log(`POST failed with ${res.status}.`);
                const data = await res.json();
                console.log(data);
                return data
            } catch(error) {
                console.log(error)
            }
	    }