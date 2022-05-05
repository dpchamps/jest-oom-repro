
  describe("some-evil-spec=340", () => {
    it("evil-block-340", () => {
      window.evil_340 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  