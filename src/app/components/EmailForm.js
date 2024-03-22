// components/EmailForm.js
export default function EmailForm() {
    return (
      <div id="mc_embed_shell" className="max-w-md mx-auto my-8 mt-24 ">
        <div id="mc_embed_signup">
          <form action="https://wrldchngrs.us22.list-manage.com/subscribe/post?u=391e788ac216f67d93bcead51&amp;id=889577b734&amp;f_id=005fc0e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_self" noValidate>
            <div id="mc_embed_signup_scroll" className="space-y-4">
              <h2 className="text-lg font-semibold text-center font-pro">Secure your spot as a WRLD CHNGR</h2>
              <div className="text-sm text-center font-inter">
                
Receive early notifications for priority access to your WRLD CHNGR NFT
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL" className="block mb-2 text-sm font-medium font-inter">Email Address <span className="text-red-500">*</span></label>
                <input type="email" name="EMAIL" className="required email block w-full p-2 border border-red-300 rounded-md shadow-sm text-gray-700 bg-white" id="mce-EMAIL" required />
                <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
              </div>
              <div id="mce-responses" className="clear foot">
                <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
              </div>
              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                {/* Anti-spam field */}
                <input type="text" name="b_391e788ac216f67d93bcead51_889577b734" tabIndex="-1" />
              </div>
              <div className="text-center">
                <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="mt-2 w-full font-pro shadow-sm bg-Primary hover:bg-Secondary text-black font-bold py-4 px-4 shadow-md border-black rounded" value="Get Notified of Drop" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
  