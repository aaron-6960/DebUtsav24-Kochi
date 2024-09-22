import "./Contacts.css"

const ContactCard = ({ name, email, phone }) => {
    return (
        <div className="custom-border p-[2px] rounded-lg w-[300px] h-[400px]">
            <div className="bg-[#27272A] rounded-lg w-full h-full flex flex-col justify-around items-center">
                <div />
                <img src="https://via.placeholder.com/150" alt="Contact" className="w-40 h-40 rounded-full mb-2" />
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-white text-xl font-bold mb-2">{name}</h3>
                    <p className="text-white mb-2">{email}</p>
                    <p className="text-white">{phone}</p>
                </div>
                <div />
            </div>
        </div>
    );
};

export default ContactCard;
