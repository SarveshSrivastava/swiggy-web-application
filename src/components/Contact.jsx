const Contact = () => {
  return (
    <div className="w-9/12 mx-auto pt-24 text-3xl font-bold">
      <h1 className="py-8">Contact Us : Swiggy Fake Application</h1>
      <form>
        <input type="text" placeholder="name" className="border-2 border-black bg-yellow-100 block p-2"/>
        <br/>
        <input type="text" placeholder="message" className="border-2 border-black bg-yellow-100 block p-2" />
        <button className="my-6 p-2 bg-red-200 border-2 border-black rounded">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
