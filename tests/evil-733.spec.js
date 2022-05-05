
  describe("some-evil-spec=733", () => {
    it("evil-block-733", () => {
      window.evil_733 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  