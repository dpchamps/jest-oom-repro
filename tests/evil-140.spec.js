
  describe("some-evil-spec=140", () => {
    it("evil-block-140", () => {
      window.evil_140 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  