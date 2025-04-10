import { Button, Field, Input, Textarea } from '@headlessui/react'
import { useState } from "react";
import emailjs from "emailjs-com";
const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: "",
        projectdetails: "",
        title: "",
      });
    
      const [loading, setLoading] = useState(false);
      const [message, setMessage] = useState("");
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        try {
          await emailjs.send(
            "service_wphhkls",       
            'template_7fm3mbu',      
            formData,
            "fpRKjMgPPUFr22_8v"        
          );
          setMessage("Message sent successfully! 🎉");
          setFormData({
            firstname: "",
            lastname: "",
            email: "",
            phonenumber: "",
            projectdetails: "",
            title: "",
          });
        } catch (error) {
          console.error("Failed to send message:", error);
          setMessage("Failed to send message. Please try again.");
        } finally {
          setLoading(false);
        }
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 mt-3 gap-y-2.5 gap-x-5">
            <Field>
              <Input
                name="firstname"
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleChange}
                required
                className="mt-3 block w-full rounded-lg border-none bg-gray-900 px-3 py-3 text-white"
              />
            </Field>
            <Field>
              <Input
                name="lastname"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleChange}
                required
                className="mt-3 block w-full rounded-lg border-none bg-gray-900 px-3 py-3 text-white"
              />
            </Field>
            <Field>
              <Input
                name="email"
                type="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-3 block w-full rounded-lg border-none bg-gray-900 px-3 py-3 text-white"
              />
            </Field>
            <Field className="row-span-2">
              <Textarea
                name="projectdetails"
                value={formData.projectdetails}
                onChange={handleChange}
                rows={5}
                placeholder="Project Details"
                required
                className="mt-3 block w-full resize-none rounded-lg border-none bg-gray-900 py-3 px-3 text-white"
              />
            </Field>
            <Field>
              <Input
                name="phonenumber"
                placeholder="Phone Number"
                value={formData.phonenumber}
                onChange={handleChange}
                required
                className="mt-3 block w-full rounded-lg border-none bg-gray-900 px-3 py-3 text-white"
              />
            </Field>
            <Field>
              <Input
                name="title"
                placeholder="Enter Title"
                value={formData.title}
                onChange={handleChange}
                required
                className="mt-3 block w-full rounded-lg border-none bg-gray-900 px-3 py-3 text-white"
              />
            </Field>
            <div className="flex mt-3 justify-end col-span-2">
              <Button
                type="submit"
                disabled={loading}
                className="px-4 py-2 bg-[#5a31a6] text-white rounded-lg"
              >
                {loading ? "Sending..." : "Send"}
              </Button>
            </div>
            {message && (
              <p className="col-span-2 text-sm mt-2 text-white">{message}</p>
            )}
          </div>
        </form>
      )
}

export default ContactForm