private var Second : float = 1;
private var Minute : float = 60 * Second;
private var Hour : float = 60 * Minute;
private var Day : float = 24 * Hour;
private var DegreesPerSecond : float = 360 / Day;
private var RotationDegree : float;
private var TimeOfDay : float;
private var Dawn : float;
private var Dusk : float;
private var SecondsPerDay : float;
var MinutesPerDay : float = 10;
var LightFadePerSecond : float = 0.007;
var SunSetStart : float = 0.1;
var SunRiseStart : float = 0.7;
var skyboxBlendModifier : float; //Do not modify
 
public enum StateOfDay{Idle, SunRise, SunSet}
var SOD : StateOfDay;
 
var SunLightBrightness : float = 0.7;
 
function Start()
{
        SOD = StateOfDay.Idle;
        SecondsPerDay = MinutesPerDay * Minute;
        RenderSettings.skybox.SetFloat("_Blend", 0);
                
        TimeOfDay = 0;
        RotationDegree = DegreesPerSecond * Day / (SecondsPerDay);
                
        SunRiseStart *= SecondsPerDay;
        SunSetStart *= SecondsPerDay;
        Dusk = SunSetStart + (SunSetStart * 2);
        Dawn = SunRiseStart - (SunRiseStart / 100); 
}
 
function Update()
{
        transform.Rotate(new Vector3(RotationDegree, 0, 0) * Time.deltaTime);
        TimeOfDay += Time.deltaTime;
        //Debug.Log(TimeOfDay);
        if(TimeOfDay > SecondsPerDay)
        {
                TimeOfDay -= SecondsPerDay;
        }
        if(TimeOfDay > SunSetStart && TimeOfDay < SunRiseStart && RenderSettings.skybox.GetFloat("_Blend") < 1)
        {
                SOD = StateOfDay.SunSet;
                BlendSkybox();
        }
        else if(TimeOfDay > SunRiseStart && RenderSettings.skybox.GetFloat("_Blend") > 0)
        {
                SOD = StateOfDay.SunRise;
                BlendSkybox();
        }
        else
        {
                SOD = StateOfDay.Idle;
        }
        if(TimeOfDay > SunSetStart && TimeOfDay < Dusk)
        {
                this.light.intensity -= LightFadePerSecond * Time.deltaTime;
        }
        if(TimeOfDay > Dawn)
        {
                this.light.intensity += LightFadePerSecond * Time.deltaTime;
        }
        if(this.light.intensity > SunLightBrightness)
        {
                this.light.intensity = SunLightBrightness;
        }
}
 
function BlendSkybox()
{
        var State : float = 0;
        
        switch(SOD)
        {
                case StateOfDay.SunSet:
                State = (TimeOfDay - SunSetStart) / SecondsPerDay * skyboxBlendModifier;
                break;
                case StateOfDay.SunRise:
                State = (TimeOfDay - SunRiseStart) / SecondsPerDay * skyboxBlendModifier;
                State = 1 - State;
                break;
        }
        RenderSettings.skybox.SetFloat("_Blend", State);
        //Debug.Log(temp);
}