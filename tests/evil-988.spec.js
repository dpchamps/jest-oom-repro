
  describe("some-evil-spec=988", () => {
    it("evil-block-988", () => {
      window.evil_988 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  