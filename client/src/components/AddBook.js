


const AddBook = ()=>{
    return(
    <>
   
<div class="max-w-lg lg:ms-auto mx-auto text-center ">
                            <div class="py-16 px-7 rounded-md bg-white">
                                                          
                                <form class="" action="" >
                                    <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
                                      <input type="text" id="fname" name="fname" placeholder="Nom *" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700 "/>
                                      <input type="text" id="fname" name="fname" placeholder="Téléphone *" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"/>
                                      <div class="md:col-span-2">
                                        <input type="email" id="email" name="email" placeholder="E-mail" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"/>
                                      </div>
                                      <div class="md:col-span-2">
                                        <label for="subject" class="float-left block  font-normal text-gray-400 text-lg">Vous accompagner sur :</label>
                                        <select id="subject" name="subject" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700">
                                          <option value="" disabled selected>Sélectionnez un domaine</option>
                                          <option value="Option-1">Référencement</option>
                                          <option value="Option-2">Publicité Digitale</option>
                                          <option value="Option-3">Brand Content</option>
                                          <option value="Option-4">Marketing Digital</option>
                                          <option value="Option-5">Emailing</option>
                                          <option value="Option-6">Création Graphique</option>
                                          <option value="Option-7">Vidéo</option>
                                          <option value="Option-8">Ux Design</option>
                                          <option value="Option-9">Consulting</option>  
                                          <option value="Option-10">Réalisation site internet</option>
                                          <option value="Option-11">Réalisation d'application mobile</option>
                                          <option value="Option-12">Réalisation d'application desktop</option>
                                          <option value="Option-13">Recrutement</option>
                                          <option value="Option-14">Formation</option>
                                          <option value="Option-15">Réalisation d'un captation drone Graphique / Vidéo</option>
                                          <option value="Option-16">Réalisation d'un montage vidéo</option>
                                          <option value="Option-17">Autre</option>
                                          
                                        </select>
                                      </div>
                                      
                                      
                                      <div class="md:col-span-2">
                                        <label for="subject" class="float-left block  font-normal text-gray-400 text-lg">Ajoutez un brief ou une pièce jointe de votre projet :</label>
                                        <input type="file" id="file" name="file" placeholder="Charger votre fichier" class="peer block w-full appearance-none border-none   bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"/>
                                      </div>
                                      <div class="md:col-span-2">
                                        <textarea name="message" rows="5" cols="" placeholder="Votre Massage *" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"></textarea>
                                      </div>
                                 
                                      <div class="md:col-span-2">
                                        <button class="py-3 text-base font-medium rounded text-white bg-blue-800 w-full hover:bg-blue-700 transition duration-300">Valider</button>
                                      </div>
                                      </div>
                                     
                                </form>
                             </div>
 </div>
    </>
          

    )
}
export default AddBook