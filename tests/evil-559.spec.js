
  describe("some-evil-spec=559", () => {
    it("evil-block-559", () => {
      window.evil_559 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  