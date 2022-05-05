
  describe("some-evil-spec=75", () => {
    it("evil-block-75", () => {
      window.evil_75 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  