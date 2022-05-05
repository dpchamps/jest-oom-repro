
  describe("some-evil-spec=635", () => {
    it("evil-block-635", () => {
      window.evil_635 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  