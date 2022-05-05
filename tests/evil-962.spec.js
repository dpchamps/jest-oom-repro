
  describe("some-evil-spec=962", () => {
    it("evil-block-962", () => {
      window.evil_962 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  