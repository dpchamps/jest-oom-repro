
  describe("some-evil-spec=937", () => {
    it("evil-block-937", () => {
      window.evil_937 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  