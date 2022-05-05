
  describe("some-evil-spec=109", () => {
    it("evil-block-109", () => {
      window.evil_109 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  