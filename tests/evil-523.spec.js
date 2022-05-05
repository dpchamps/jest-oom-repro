
  describe("some-evil-spec=523", () => {
    it("evil-block-523", () => {
      window.evil_523 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  