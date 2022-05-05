
  describe("some-evil-spec=108", () => {
    it("evil-block-108", () => {
      window.evil_108 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  