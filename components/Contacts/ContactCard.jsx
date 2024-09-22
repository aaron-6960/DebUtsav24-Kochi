import "./Contacts.css"
import Image from "next/image";

const ContactCard = ({ name, title, phone, image }) => {
    return (
        <div className="custom-border p-[2px] rounded-lg w-[300px] h-[400px]">
            <div className="bg-zinc-900/[.9] rounded-lg w-full h-full flex flex-col justify-around items-center">
                <div />
                <Image src={image} alt="Contact" className="w-40 h-40 rounded-full mb-2" />
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-white text-xl font-bold mb-2">{name}</h3>
                    <p className="text-white mb-2">{title}</p>
                    <a href={`tel:${phone}`} className="text-white hover:underline hover:text-red hover:underline-offset-4">{phone}</a>
                </div>
                <div />
            </div>
        </div>
    );
};

export default ContactCard;
