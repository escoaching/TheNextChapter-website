'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import MetaComponent from '../MetaComponent'


const meta = {
  title: "Contact | Emotional Sobriety Coaching",
  description:"The next chapter is a program centered around emotional sobriety. Get happy, not sober. Reduce your alcohol consumption by 80%.",
  imageUrl:"https://www.emotionalsobrietycoaching.com/preview.png",
  pageUrl:"https://www.emotionalsobrietycoaching.com/contact"
}

const ContactPage = () => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  useEffect(() => {
    // This effect will run when the modal is opened
    if (showModal) {
      const script = document.createElement('script')
      script.src = "https://emotionalsobrietycoaching.activehosted.com/f/embed.php?id=1"
      script.charset = "utf-8"
      document.body.appendChild(script)

      return () => {
        document.body.removeChild(script)
      }
    }
  }, [showModal])

  return (
    <>
      <MetaComponent  {...meta}/>
      <div className="min-h-screen bg-[#fff8f7] flex flex-col">
        <header className="bg-[#46474c] shadow-lg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <Link href="/">
                <Image
                  src="/logonew.png"
                  alt="The Next Chapter Logo"
                  width={200}
                  height={50}
                  className="transform hover:scale-105 transition-all"
                />
              </Link>
              <nav>
                <Link href="/" className="text-[#fff8f7] hover:text-[#bda5a3] transition-colors">
                  Home
                </Link>
              </nav>
            </div>
          </div>
        </header>

        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-12 text-[#46474c] text-center">Contact Us</h1>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white shadow-2xl rounded-lg overflow-hidden mb-12">
              <div className="md:flex">
                <div className="md:w-1/2 p-8 bg-gradient-to-br from-[#90cad6] to-[#7ab8c4]">
                  <h2 className="text-3xl font-semibold mb-6 text-white">Get in Touch</h2>
                  <div className="space-y-6">
                    <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium mb-2 text-white">Podcast Guest Request</h3>
                      <p className="text-white mb-4">Want to feature Colleen on your podcast?</p>
                      <a href="https://emotionalsobrietycoaching.typeform.com/to/GyQ7Cgg1" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-[#46474c] py-2 px-4 rounded hover:bg-opacity-90 transition-colors">
                        Apply to be a Podcast Guest
                      </a>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="space-y-6">
                    <div className="bg-[#f0f8fa] p-6 rounded-lg">
                      <h3 className="text-xl font-medium mb-2 text-[#46474c]">Email Colleen</h3>
                      <p className="text-[#46474c] mb-4">Have a question or want to get in touch?</p>
                      <a href="mailto:colleen@emotionalsobrietycoaching.com" className="inline-block bg-[#90cad6] text-white py-2 px-4 rounded hover:bg-[#7ab8c4] transition-colors">
                        Send an Email
                      </a>
                    </div>
                    <div className="bg-[#f0f8fa] p-6 rounded-lg">
                      <h3 className="text-xl font-medium mb-2 text-[#46474c]">Join Our Email List</h3>
                      <p className="text-[#46474c] mb-4">Stay updated with our latest news and offers.</p>
                      <button onClick={openModal} className="inline-block bg-[#90cad6] text-white py-2 px-4 rounded hover:bg-[#7ab8c4] transition-colors">
                        Subscribe Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <Image
                    src="/sober.webp"
                    alt="Colleen Kachmann"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <h2 className="text-3xl font-semibold mb-6 text-[#46474c]">About Colleen</h2>
                  <p className="text-[#46474c] mb-4 leading-relaxed">
                    Colleen uses the term &ldquo;non-drinker&rdquo; to describe her relationship with alcohol. But she doesn&apos;t focus on or identify in any way with alcohol. Instead, she prides herself on practicing emotional sobriety, a skill that she sums up with, &ldquo;when you accept responsibility for the problem, you become the solution.&rdquo;
                  </p>
                  <p className="text-[#46474c] leading-relaxed">
                    Colleen Kachmann is a recovery-certified Master Coach and author of Life Off the Label: A Handbook for Creating Your Own Brand of Health and Happiness. She holds a MS in health coaching, a BS in education and a women&apos;s functional and integrative medicine professional certificate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-[#46474c] text-[#fff8f7] py-8 md:py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 order-2 md:order-1">
          <div className="flex justify-center md:justify-start space-x-6">
            <Link href="https://www.youtube.com/channel/UCv24pItAK0xWQ_m6mD8T50w" target="_blank" rel="noopener noreferrer">
              <Image src="/youtube.webp" alt="YouTube" width={32} height={32} className="hover:opacity-80 transition-opacity" />
            </Link>
            <Link href="https://vimeo.com/user138845606" target="_blank" rel="noopener noreferrer">
              <Image src="/vimeo.webp" alt="Vimeo" width={32} height={32} className="hover:opacity-80 transition-opacity" />
            </Link>
            <Link href="https://www.instagram.com/thehangoverwhisperer?igsh=MWowa2dhZnRmc3hlZw==" target="_blank" rel="noopener noreferrer">
              <Image src="/instagram.png" alt="Instagram" width={32} height={32} className="hover:opacity-80 transition-opacity" />
            </Link>
            <Link href="https://www.tiktok.com/@hangoverwhisperer" target="_blank" rel="noopener noreferrer">
              <Image src="/tiktok.png" alt="TikTok" width={32} height={32} className="hover:opacity-80 transition-opacity" />
            </Link>
          </div>
          <p className="text-sm md:text-base mt-4 text-center md:text-left">Copyright 2024 Emotional Sobriety Coaching</p>
        </div>
        <div className="order-1 md:order-2 mb-6 md:mb-0">
          <ul className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6">

            <li className="mb-2 md:mb-0"><Link href="/" className="text-sm md:text-base hover:text-[#90CAD6] transition-all">Home</Link></li>
            <li className="mb-2 md:mb-0"><Link href="/about-TNC" className="text-sm md:text-base hover:text-[#90CAD6] transition-all">Program</Link></li>
            <li className="mb-2 md:mb-0"><Link href="https://emotionalsobrietycoaching.typeform.com/to/QbFjUKjL" className="text-sm md:text-base hover:text-[#90CAD6] transition-all">Book Discovery Call</Link></li>
            <li className="mb-2 md:mb-0"><Link href="/privacy-policy" className="text-sm md:text-base hover:text-[#90CAD6] transition-all">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg max-w-md w-full relative">
              <button 
                onClick={closeModal} 
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div id="_form_3_"></div>
            </div>
          </div>
        )}

        <Script id="form-script" strategy="afterInteractive">
          {`
            window.cfields = [];
            window._show_thank_you = function(id, message, trackcmp_url, email) {
              var form = document.getElementById('_form_' + id + '_'), thank_you = form.querySelector('._form-thank-you');
              form.querySelector('._form-content').style.display = 'none';
              thank_you.innerHTML = message;
              thank_you.style.display = 'block';
              const vgoAlias = typeof visitorGlobalObjectAlias === 'undefined' ? 'vgo' : visitorGlobalObjectAlias;
              var visitorObject = window[vgoAlias];
              if (email && typeof visitorObject !== 'undefined') {
                  visitorObject('setEmail', email);
                  visitorObject('update');
              } else if (typeof(trackcmp_url) != 'undefined' && trackcmp_url) {
                  // Site tracking URL to use after inline form submission.
                  _load_script(trackcmp_url);
              }
              if (typeof window._form_callback !== 'undefined') window._form_callback(id);
            };
            window._show_error = function(id, message, html) {
              var form = document.getElementById('_form_' + id + '_'), err = document.createElement('div'), button = form.querySelector('button'), old_error = form.querySelector('._form_error');
              if (old_error) old_error.parentNode.removeChild(old_error);
              err.innerHTML = message;
              err.className = '_error-inner _form_error _no_arrow';
              var wrapper = document.createElement('div');
              wrapper.className = '_form-inner';
              wrapper.appendChild(err);
              button.parentNode.insertBefore(wrapper, button);
              document.querySelector('[id^="_form"][id$="_submit"]').disabled = false;
              if (html) {
                  var div = document.createElement('div');
                  div.className = '_error-html';
                  div.innerHTML = html;
                  err.appendChild(div);
              }
            };
            window._load_script = function(url, callback) {
              var head = document.querySelector('head'), script = document.createElement('script'), r = false;
              script.type = 'text/javascript';
              script.charset = 'utf-8';
              script.src = url;
              if (callback) {
                  script.onload = script.onreadystatechange = function() {
                      if (!r && (!this.readyState || this.readyState == 'complete')) {
                          r = true;
                          callback();
                      }
                  };
              }
              head.appendChild(script);
            };
            (function() {
              if (window.location.search.search("excludeform") !== -1) return false;
              var getCookie = function(name) {
                  var match = document.cookie.match(new RegExp('(^|; )' + name + '=([^;]+)'));
                  return match ? match[2] : null;
              }
              var setCookie = function(name, value) {
                  var now = new Date();
                  var time = now.getTime();
                  var expireTime = time + 1000 * 60 * 60 * 24 * 365;
                  now.setTime(expireTime);
                  document.cookie = name + '=' + value + '; expires=' + now + ';path=/; Secure; SameSite=Lax;';
              }
                      var addEvent = function(element, event, func) {
                  if (element.addEventListener) {
                      element.addEventListener(event, func);
                  } else {
                      var oldFunc = element['on' + event];
                      element['on' + event] = function() {
                          oldFunc.apply(this, arguments);
                          func.apply(this, arguments);
                      };
                  }
              }
              var _removed = false;
              var form_to_submit = document.getElementById('_form_3_');
              var allInputs = form_to_submit.querySelectorAll('input, select, textarea'), tooltips = [], submitted = false;

              var getUrlParam = function(name) {
                  var params = new URLSearchParams(window.location.search);
                  return params.get(name) || false;
              };

              for (var i = 0; i < allInputs.length; i++) {
                  var regexStr = "field\\[(\\d+)\\]";
                  var results = new RegExp(regexStr).exec(allInputs[i].name);
                  if (results != undefined) {
                      allInputs[i].dataset.name = window.cfields[results[1]];
                  } else {
                      allInputs[i].dataset.name = allInputs[i].name;
                  }
                  var fieldVal = getUrlParam(allInputs[i].dataset.name);

                  if (fieldVal) {
                      if (allInputs[i].dataset.autofill === "false") {
                          continue;
                      }
                      if (allInputs[i].type == "radio" || allInputs[i].type == "checkbox") {
                          if (allInputs[i].value == fieldVal) {
                              allInputs[i].checked = true;
                          }
                      } else {
                          allInputs[i].value = fieldVal;
                      }
                  }
              }

              var remove_tooltips = function() {
                  for (var i = 0; i < tooltips.length; i++) {
                      tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);
                  }
                  tooltips = [];
              };
              var remove_tooltip = function(elem) {
                  for (var i = 0; i < tooltips.length; i++) {
                      if (tooltips[i].elem === elem) {
                          tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);
                          tooltips.splice(i, 1);
                          return;
                      }
                  }
              };
              var create_tooltip = function(elem, text) {
                  var tooltip = document.createElement('div'), arrow = document.createElement('div'), inner = document.createElement('div'), new_tooltip = {};
                  if (elem.type != 'radio' && elem.type != 'checkbox') {
                      tooltip.className = '_error';
                      arrow.className = '_error-arrow';
                      inner.className = '_error-inner';
                      inner.innerHTML = text;
                      tooltip.appendChild(arrow);
                      tooltip.appendChild(inner);
                      elem.parentNode.appendChild(tooltip);
                  } else {
                      tooltip.className = '_error-inner _no_arrow';
                      tooltip.innerHTML = text;
                      elem.parentNode.insertBefore(tooltip, elem);
                      new_tooltip.no_arrow = true;
                  }
                  new_tooltip.tip = tooltip;
                  new_tooltip.elem = elem;
                  tooltips.push(new_tooltip);
                  return new_tooltip;
              };
              var resize_tooltip = function(tooltip) {
                  var rect = tooltip.elem.getBoundingClientRect();
                  var doc = document.documentElement, scrollPosition = rect.top - 
                      ((window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0));
                  if (scrollPosition < 40) {
                      tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _below';
                  } else {
                      tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _above';
                  }
              };
              var resize_tooltips = function() {
                  if (_removed) return;
                  for (var i = 0; i < tooltips.length; i++) {
                      if (!tooltips[i].no_arrow) resize_tooltip(tooltips[i]);
                  }
              };
              var validate_field = function(elem, remove) {
                  var tooltip = null, value = elem.value, no_error = true;
                  remove ? remove_tooltip(elem) : false;
                  if (elem.type != 'checkbox') elem.className = elem.className.replace(/ ?_has_error ?/g, '');
                  if (elem.getAttribute('required') !== null) {
                      if (elem.type == 'radio' || (elem.type == 'checkbox' && /any/.test(elem.className))) {
                          var elems = form_to_submit.elements[elem.name];
                          if (!(elems instanceof NodeList || elems instanceof HTMLCollection) || elems.length <= 1) {
                              no_error = elem.checked;
                          }
                          else {
                              no_error = false;
                              for (var i = 0; i < elems.length; i++) {
                                  if (elems[i].checked) no_error = true;
                              }
                          }
                          if (!no_error) {
                              tooltip = create_tooltip(elem, "Please select an option.");
                          }
                      } else if (elem.type =='checkbox') {
                          var elems = form_to_submit.elements[elem.name], found = false, err = [];
                          no_error = true;
                          for (var i = 0; i < elems.length; i++) {
                              if (elems[i].getAttribute('required') === null) continue;
                              if (!found && elems[i] !== elem) return true;
                              found = true;
                              elems[i].className = elems[i].className.replace(/ ?_has_error ?/g, '');
                              if (!elems[i].checked) {
                                  no_error = false;
                                  elems[i].className = elems[i].className + ' _has_error';
                                  err.push("Checking %s is required".replace("%s", elems[i].value));
                              }
                          }
                          if (!no_error) {
                              tooltip = create_tooltip(elem, err.join('<br/>'));
                          }
                      } else if (elem.tagName == 'SELECT') {
                          var selected = true;
                          if (elem.multiple) {
                              selected = false;
                              for (var i = 0; i < elem.options.length; i++) {
                                  if (elem.options[i].selected) {
                                      selected = true;
                                      break;
                                  }
                              }
                          } else {
                              for (var i = 0; i < elem.options.length; i++) {
                                  if (elem.options[i].selected && (!elem.options[i].value || (elem.options[i].value.match(/\n/g)))) {
                                      selected = false;
                                  }
                              }
                          }
                          if (!selected) {
                              elem.className = elem.className + ' _has_error';
                              no_error = false;
                              tooltip = create_tooltip(elem, "Please select an option.");
                          }
                      } else if (value === undefined || value === null || value === '') {
                          elem.className = elem.className + ' _has_error';
                          no_error = false;
                          tooltip = create_tooltip(elem, "This field is required.");
                      }
                  }
                  if (no_error && elem.name == 'email') {
                      if (!value.match(/^[\+_a-z0-9-'&=]+(\.[\+_a-z0-9-']+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i)) {
                          elem.className = elem.className + ' _has_error';
                          no_error = false;
                          tooltip = create_tooltip(elem, "Enter a valid email address.");
                      }
                  }
                  if (no_error && /date_field/.test(elem.className)) {
                      if (!value.match(/^\d\d\d\d-\d\d-\d\d$/)) {
                          elem.className = elem.className + ' _has_error';
                          no_error = false;
                          tooltip = create_tooltip(elem, "Enter a valid date.");
                      }
                  }
                  tooltip ? resize_tooltip(tooltip) : false;
                  return no_error;
              };
              var needs_validate = function(el) {
                  if(el.getAttribute('required') !== null){
                      return true
                  }
                  if(el.name === 'email' && el.value !== ""){
                      return true
                  }
                  return false
              };
              var validate_form = function(e) {
                  var err = form_to_submit.querySelector('._form_error'), no_error = true;
                  if (!submitted) {
                      submitted = true;
                      for (var i = 0, len = allInputs.length; i < len; i++) {
                          var input = allInputs[i];
                          if (needs_validate(input)) {
                              if (input.type == 'text' || input.type == 'number' || input.type == 'time') {
                                  addEvent(input, 'blur', function() {
                                      this.value = this.value.trim();
                                      validate_field(this, true);
                                  });
                                  addEvent(input, 'input', function() {
                                      validate_field(this, true);
                                  });
                              } else if (input.type == 'radio' || input.type == 'checkbox') {
                                  (function(el) {
                                      var radios = form_to_submit.elements[el.name];
                                      for (var i = 0; i < radios.length; i++) {
                                          addEvent(radios[i], 'click', function() {
                                              validate_field(el, true);
                                          });
                                      }
                                  })(input);
                              } else if (input.tagName == 'SELECT') {
                                  addEvent(input, 'change', function() {
                                      validate_field(this, true);
                                  });
                              } else if (input.type == 'textarea'){
                                  addEvent(input, 'input', function() {
                                      validate_field(this, true);
                                  });
                              }
                          }
                      }
                  }
                  remove_tooltips();
                  for (var i = 0, len = allInputs.length; i < len; i++) {
                      var elem = allInputs[i];
                      if (needs_validate(elem)) {
                          if (elem.tagName.toLowerCase() !== "select") {
                              elem.value = elem.value.trim();
                          }
                          validate_field(elem) ? true : no_error = false;
                      }
                  }
                  if (!no_error && e) {
                      e.preventDefault();
                  }
                  resize_tooltips();
                  return no_error;
              };
              addEvent(window, 'resize', resize_tooltips);
              addEvent(window, 'scroll', resize_tooltips);

              var _form_serialize = function(form){if(!form||form.nodeName!=="FORM"){return }var i,j,q=[];for(i=0;i<form.elements.length;i++){if(form.elements[i].name===""){continue}switch(form.elements[i].nodeName){case"INPUT":switch(form.elements[i].type){case"text":case"number":case"date":case"time":case"hidden":case"password":case"button":case"reset":case"submit":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"checkbox":case"radio":if(form.elements[i].checked){q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value))}break;case"file":break}break;case"TEXTAREA":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"SELECT":switch(form.elements[i].type){case"select-one":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"select-multiple":for(j=0;j<form.elements[i].options.length;j++){if(form.elements[i].options[j].selected){q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].options[j].value))}}break}break;case"BUTTON":switch(form.elements[i].type){case"reset":case"submit":case"button":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break}break}}return q.join("&")};
              var form_submit = function(e) {
                  e.preventDefault();
                  if (validate_form()) {
                      // use this trick to get the submit button & disable it using plain javascript
                      document.querySelector('#_form_3_submit').disabled = true;
                      var serialized = _form_serialize(document.getElementById('_form_3_')).replace(/%0A/g, '\\n');
                      var err = form_to_submit.querySelector('._form_error');
                      err ? err.parentNode.removeChild(err) : false;
                      _load_script('https://emotionalsobrietycoaching.activehosted.com/proc.php?' + serialized + '&jsonp=true');
                  }
                  return false;
              };
              addEvent(form_to_submit, 'submit', form_submit);
          })();
          `}
        </Script>
      </div>
    </>
  )
}

export default ContactPage
