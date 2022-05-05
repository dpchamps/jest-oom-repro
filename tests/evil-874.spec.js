
  describe("some-evil-spec=874", () => {
    it("evil-block-874", () => {
      window.evil_874 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  