// src/Components/ContactUs.jsx
import React from 'react';

function ContactUs() {
  return (
    <div className="  flex flex-col items-center justify-center min-h-screen" >
      <div className="bg-gray-100 ">
      <div className="text-2xl  sm:text-[40px] font-bold text-center ">
                <span className="highlighted-word relative px-3 block sm:inline"
                //  style={{ backgroundImage: "url('https://media.istockphoto.com/id/982969544/vector/red-oval-crayon-frame.jpg?s=1024x1024&w=is&k=20&c=Mv8vP1wrrwc_XDdLhypYebd7U_o7KJsTdyv_enxKiCc=')", backgroundRepeat: 'no-repeat',width:'10px', }}
                >
                    CONTACT US
                </span>
            </div>
        <div className="bg-white rounded-lg shadow-md  p-8 flex flex-col sm:flex-row w-full max-w-4xl ">
          <div className="md:w-1/2 pr-8 text-white  " style={{ backgroundImage: `url(${'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA+gMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAAAwECBAUGBwj/xABAEAABAwIEAwUEBwcDBQEAAAABAAIDBBEFEiExBkFREyJhcYEUMpHRByNCobHB8BVSYnKS4fEkM1M0Y4OTwhb/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAHREBAQEAAwEBAQEAAAAAAAAAAAERAhIhMUEDYf/aAAwDAQACEQMRAD8A+IoQhaZCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEKQCbW57IBFlvgp4mD60GR/MB1mt+a9JPwlisGDw4q3CqeoppYhKew7z42kX1b5dLpq48YhdJtTRH36djf8Axj5rRFHQT91j6Vrjyf3PvdYKGOKhetouFq2pAkosPgrGH/iqmP8A/pY8Q4UxSmvJNhNdTt6CLO0eoTTHnULVJQTRuy90u/dJsfgUh8b2GzmkK6KIQhECEIQCEIQCEIQCEIQCEIQCEIQCEIQCEKbIIQpsiyCEJjGAtcTfQ2sNygMze5f+U7ouFpkTshzDfkoMZG4cPRWa+PKA+Iut9pr7H5IYcyXvXXp8C44xfBwGR1HawtFhDLqLdB0XlWvpQdY5/wD2N+SfHU0Ld6Wd380wH4BZUzH6iOtxSorYadlNHO/OIWahvW3mblZqGGCeYMqJ+xadjbQ+uw9U6rq4p2ZY6RkQ653OP3rBtpyWvqVonjZSzg0tQZMp/wBxoLSD4H8wuvhnGnEWFkezYpO9g+xMe0H36rkxxOkgu3UrPlyOs8bbtOhUH0Cn+kqOrb2fEWA0lYzYyRgNd56/2WtkPAHEJHstfPhFQdoqkWZf72/eF85bHA8dyQsd0kFx8R8kOpZgMwbnb1aQUHtMX+jfF6NplpBBiNPuJKN3et4tP5ErxstHLHK6IscJG+8x4yuHouhhGKY7hH1uGVNTDED7rblv9K7s3GlLjMTYeJ8KZLIB/wBZRnJM30Oh8roPFuaWnK4Fp8VVehqYadhL6OeKtpz7ri2zh/M06g/oLDU0rJyHUkbWn7TL6nyTTHMQruYWOIcCCORUWVFUKbIsiIQhCAQhTZBCFaysAiqAKQFayOSCtlcRvLC4NJaBmv4LayJkVL2r2h2Z2UeGiyyTPlJ8fz3U1q8c+j2aQOyuFu/kNzsUCFuhMg1DtOlhp8VWzydTe/VbIsKqZIDMBaMbkuA0UtJN+Ridla4GNxtYHb4hMdK0vfkzWdbKb7LS7C5xL2dgbvcwWeNcu6gUEpaD2V7tz6H7PVTYvTkzNnlGnaOH4KsuZ7szu8etrLU+ie0EmF7SOoOioGkjUWPRXYXjf1ksf3VFj0PwWwtXoOE+F6jHp88hMVEx1pJQLF3VrfnyTsnVl4X4VrOIHPexwhpmXBme0kZugFxf8kzEOBMepMxZTtqWD7ULt/Qr6nT4hg+HxsoqWSJrYhlbGza43F9dVno+JJy2aXEMFrKKnZTvnic6IuMgaL2vcAcldqZHgOEeFq+urzTVtNNTQRguke9ttOgvzWzGuAcYp3vNMI66H7ItZ3w3+C+h4djkj+0diWH1GHQNgMomqI8rC3TmCeo6eS7dFPBXRiSmeHN5LKvzpWYZLTSFlVTz0rxp3m3b+R/FJfRzQM7bMAwD3gSCV+i8Up89LI4UzJntacrHAanovz5xAcQFe9mJU76eQE2ic3La/MdfNVLGduJVjI8gnJaNr20SGtfKXkWzAZiCUtXgYZZmMBsXG11r4irTrdpObw5Lu4ZhGN1kTZaSidUMO2W11kiiFFO0yMa7s3XyuGjrFetH0mYnBE2Kgo8Pp2AWDWxOIA/qT6fHArqR8TxBilJJTVFrgSNs63VciamdFqDmZ+8OXmtmN43V43Xmsr5A6UtDe6LAAdAsjKrJy+RUzGt1nsoTTlOrBYHYKlldRWyiysiyamK5VZCtZNMRZCmykBNVACrINNEyyC24/NTTD6SpjEb4ai/ZPGpHI8irvoJQC+MCWG2jm6fEHULEY3ABx921xbmrGTs7CNxNjvffoVMa7S/TZYZIi4SMcwt0II1B+a209YaikNLNLlA1Y43s0/xEnb0XMfUSPjMbpHFpdmNzu7qljUjT79067Cc8vjVLBVRNDgM7XaBzDcO8gk9rK293HXff9eimOeWMnK4tNrZmmxt0THVeYWdGwgNs1trAeJ6lMTSzUzE37R39XNU7R+a+ckqz8h1bsm0sTMzXyjM2/u9VcZtr0XB3DFRjsnb1L3xUEZOd2xkPRp/Er0OK44+oiOH8PRN9hpSI5BE4NLxyA/hv8fJcyv4unOBfsylp46ZsgEeeIkZWcwB1XLfLStaXtqXslLiBT2sweo0ttuouvV4FhXtEntUcDYJCXOdO6RxzNO+YaCwNxYWvbkvY4JTU9bGRFjFa9oGX6t7G5fAAs28yV5nhHG6abDOwkn7GZrBGRmym4Fr/AHXXchla2GSIPiijfe748rCL6XB2J9AuV5e+u3HhLHQxqi7GCOkrql9RQ58wdls/ugucx4GjgWhxtsQCLA2XEOKvo8TqP/zNPQ0tG276uD2URB2U27jgTd9iTp965XEXEUOH4Z+zaOqfUzlxySOJOW4I015Arz0GNCsYaWqnidC2TtZGRQgTOyj7D9xyuOa3PXPl5X17h/GKfHKWR8ekkTssjLai+rT5EJ2K4PQYrTmCupIp47X77b28l87+jvEZH8Y1LWF/Zy0mVwdv3SMpPK+p+JXqfpA4rbw9heSBwOIVAIgafsjm8+A/H1Wkj5Fx1huF4TjstHhBe6OJo7XM/MGP/dad9Bbe64EJym5JHkpmlfNKXvcXOcS5zzu4nclLK0zXTmq46+MCWzKlotm5SDx6Fc6S7HEOBHmqeatnNu93vNEVvdQpKhA+nFwbqXBTTjuk8lLll0nwtCOaFWQEIspCgFIRZMiidI8AN35kafFFxDGGR1mAkjU23A6qDIG8+8Dof7plU5kRETLkjd1tz1B3HS3gsgGfzurC/wCGOufedqBZWZHdwFhvuobEdrkLVDHaw5lZtXjx2l+zNUOpG20JWwM18FBCz2rr0jCaV32XA+aU6nkHJdLKs5maXlugA6c1uWufLjJ6RFEAbv3WjMGZdNtlUjJ32nncHoVVznyuLnuudyeq05L1Ds0eh22Xaw6d1bGxscNMZDEGOdK3/bcNneXj89eRHkc21koGWjmbLA5zHNN2SMcQ4HzRG6enkpjnqZO9e+amaA63iBYfFdHDaWWuwjF66KpqZmUlPmjiLrODrjMTbTujVZKXFnxsL5cOhkjdbOYWhgPmAC0f0hIqcZkZKyTDZZ6WUnvujktf4AJY1uKU1LVyua6JzGuPvmYj4nMuniGJvpaUUzYaVha8PblZ381veNzpudhcrmR4nV1M0bKOAe1HRroY80rj4dD5AHxXr+HPo9nlPt/EbvZ6Zt3uhLrvdzu48h96i5TPo/DcDwms4kxGTLGWlkQdu/W5t4kgW8rrxWP4xU45is1dVucXyaNF/caNmhdPjTiBuK1TKaiszDqTu08bNAf4l5i51SIZoFBsqKFRbQ+CsYnhocBdp5hL15Lo0gDWEX3UtxrjNrn+qvFE6Vwa0aDUrpOhhcbljT6K0bGNBDAB5LHfxufy99ZiwNblaluCfINSluSVbCCEKzlC0xiEBCkBVkE6LbTgQ0r52hucWbmttf8Ax/lYXGzm2W5xb+zyAdTJ7rt9v1ss1vixBtySeuiY0eCArBCLsT2uAYf3kgKyldJcPzC1lHJLCY1TF7ah+jHeRXI5rsSi8btbaLj2tpot8HH+i7JHMNw4grVDUwkgVMAf4sOV391hQtOb0ENPQ1Tf9HWxsf8A8VT9Wf6vd+NlmqqSpp5DHUwyRncNc3fxB5jxGi5Qeeq6OH4xV0bRGx+aC+sMrQ+M+h29LIB1GBY2Idz11CW+kmeA3OcoOgcdAu7T4hgtYCKqCWiltcvgdnYfQ6ha2YEaoH2GspageEmUjzB1Hqmp69bwFNw+IaWCKGD9oQsLQ58Y7RxI1IPNcv6UOKmva7BaCQBgP+qe0+9/2/muLNJFw2HOhqIp8UILWOj1bTAizjfm62nqvHTyF773Nt7k3J8Sp+t74o9xc4lVQhVkIQrBqCAriRwGhVCFCKaJ3DcpjJyNbrOhMh2sau1vupzXWUFMa5TGpyXchRfRRdTDUgKRsoCsilE2eF0wTLhpaGkmJ2YADZp9PJcqTdbsLewVDQ/ZwLXbbFLDjfSh6WV2omidFK+N27TZDVlqLKwVRurtRVmpo2VGpoCKw1sn2QsPNdOogzahYpKZzdVuOPKXSEKS0jdQqyEIQgm5G26uJXC3ht4JaEF3PLhbkFRCEApUt7xsFrpqXNuChhMcObVN7GwXSjpsoUuh6rOtyOO6PVKLbLsOp7rNJT25K6ljnoWkw2VeyV1MIsrgJmRRZDEBSiyFFSCpuqgoBUXVJeqI35XDqrOFwlHQrTLrPf7ZCJWC80TbSDW7m8je3xus/NIppzDIHC2muvNaH5XfWRluVxvlBuW+egWMx0nLQExqW1MaimNTRoEpqvdRVxruFJia7cWQxOY0lT9XzGV9E0jQLHNQlpOULu5NLKRDfdalc7I8u+F7N2lLOi9S+ja65yhc6fDb+6FvWMcdQtU1FJGdlnLHC+hTRClrSTsrRxOeRoV1KKiAuX201TTCKSkuQS1diKmDGjTktNJSXAdbQrU+HLyWLW5GF8dgAOv+Up7Rz5/r5rVNYP12y3P6+KzuFz3ue/69SopeXTVJewEE8loJ7tzukvP1dupQZjGEp0YWlLfZUZiwJZatBSXIlKcFRMcqKsqoCEKiwS5EIRKqBcE9Fvw2MTF8Ty7KWF+h5hCEq8VGG4TAhCy6GNVhuhCBzSQFohcUIWa1Wpuu6e0DKhC1GKL6OVLAjUKEIyvPFGYLlgvZYfZITC12TUhCEAyniAFmrXFEwlotpdCFaOk0Brg0bWSp3G/xQhZaYpRmLgeoH4rM0l179fzKEKirtYg7mQku9wIQgUUpylCBR3SXoQqlLcoQhGX/2Q=='})`, backgroundSize: 'cover', backgroundPosition: 'center',borderRadius:' 0.8rem' }}>
            <h2 className="text-xl font-semibold my-4 px-8">Contact Information</h2>
            <p className="text-gray-600 my-4 px-8">Say something to start a live chat!</p>
            <p className="my-2 px-8"><strong>Phone:</strong> +91 74340 00130</p>
            <p className="my-2 px-8"><strong>Email:</strong> admin@apsthreeai.ai</p>
            <p className="my-2 px-8"><strong>Address:</strong> H-203, Shukan Platinum Appt, Opp. Satyam Hospital, Nr. Vandemataram City, Ahmedabad, Gujarat, India - 382481</p>
          </div>
          <div className="md:w-1/2 lg:px-8 py-8">
            <form className="space-y-4">
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bubble-gum"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bubble-gum"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bubble-gum"
              />
              <input
                type="number"
                placeholder="Phone No"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bubble-gum"
              />
              <textarea
                placeholder="Message"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bubble-gum"
                rows="4"
              ></textarea>
              <button 
                type="submit"
                className="px-6 py-2 flex justify-center bg-bubble-gum text-white rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
