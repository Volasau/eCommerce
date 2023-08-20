export const shippingInner = `<h3>SHIPPING ADDRESS</h3>
                              <div class="form-group">
                                <label for="countryShip">Country:</label>
                                <input placeholder="Enter the country" class="input" autocomplete="off" type="text" id="countryShip" name="country" required="">
                                <span class="error" id="country-errorShip"></span>
                                <div id="country-listShip"></div>
                              </div>
                              <div class="form-group">
                                <label for="cityShip">City:</label>
                                <input placeholder="Enter the city" class="input" autocomplete="off" type="text" id="cityShip" name="city" required="">
                                <span class="error" id="city-errorShip"></span>
                              </div>
                              <div class="form-group">
                                <label for="streetShip">Street:</label>
                                <input placeholder="Enter the street" class="input" autocomplete="off" type="text" id="streetShip" name="street" required="">
                                <span class="error" id="street-errorShip"></span>
                              </div>
                              <div class="form-group">
                                <label for="postcodeShip">Post Code:</label>
                                <input placeholder="Enter the postcode" class="input" autocomplete="off" type="text" id="postcodeShip" name="postcode" required="">
                                <span class="error" id="postcode-errorShip"></span>
                                <input type="checkbox" id="set-as-default-address-ship" class="checkbox">
                                <label for="set-as-default-address-ship">Set as default address</label>
                              </div>`;
