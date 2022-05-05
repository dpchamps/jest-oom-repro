
  describe("some-evil-spec=231", () => {
    it("evil-block-231", () => {
      window.evil_231 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  