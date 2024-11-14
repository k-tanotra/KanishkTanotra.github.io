import React,{useState} from 'react'

const SendEmail = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Message Sent:', formData);
        // Here you can handle form submission, such as sending the data to an API
        alert('Message sent successfully!');
      };

  return (
    <div className="p-6 w-full bg-black bg-opacity-25 rounded-xl shadow-lg shadow-black space-y-4 mt-5">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-md sm:text-2xl font-medium" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            className="mt-1 p-2 block text-black bg-white opacity-60 w-full border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-md sm:text-2xl font-medium" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className="mt-1 p-2 block text-black bg-white opacity-60 w-full border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-md sm:text-2xl font-medium" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="What would you like to ask me?"
            className="mt-1 p-2 block text-black bg-white opacity-60 w-full border border-gray-300 rounded-md"
            rows="7"
            required
          />
        </div>
        <div className="flex items-center justify-center">
        <button
          type="submit"
          className="w-full max-w-[200px] px-4 py-2 font-bold bg-clip-text bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-300 via-purple-100 to-stone-200 text-transparent hover:text-opacity-60  hover:custom-aqua hover:border-opacity-50 text-sm sm:text-base md:text-lg lg:text-xl border-2 rounded-xl border-white"
        >
          Send Message
        </button>
        </div>
      </form>
    </div>
  )
}

export default SendEmail