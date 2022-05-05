
  describe("some-evil-spec=212", () => {
    it("evil-block-212", () => {
      window.evil_212 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  