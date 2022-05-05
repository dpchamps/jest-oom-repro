
  describe("some-evil-spec=905", () => {
    it("evil-block-905", () => {
      window.evil_905 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  