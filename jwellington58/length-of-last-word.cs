public class Solution {
    public int LengthOfLastWord(string s) {
        var arrayOfWords = s.Trim().Split(" ");
		return (arrayOfWords[arrayOfWords.Length - 1]).Length;
    }
}