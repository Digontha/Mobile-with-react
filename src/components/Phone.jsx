

const Phone = ({data,inx}) => {
//   console.log(data);
const{phone_name}=data
    return (
       <>
       <p>{++inx}.  {phone_name}</p>
       </>
    );
};

export default Phone;