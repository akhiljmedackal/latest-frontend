import { useEffect } from "react";

const Tray = () => {

    useEffect(() => {
        fetchCart();
    }, []);

    const fetchCart = async (e) => {
        setLoading(true);
    
        try {
          var token = localStorage.getItem("token");
          const data = await fetch(
            `https://campus-in-backend.herokuapp.com/products/search/canteen1/${category}`,
            {
              method: "GET",
              mode: "cors",
              headers: {
                "Content-type": "application/json; charset=UTF-8",
                "x-auth-token": token,
              },
            }
          );
          const response = await data.json();
          console.log(response);
    
          setData(response);
    
          setLoading(false);
        } catch (e) {
          alert(e);
        }
      };

    return <div></div>
}

export default Tray;