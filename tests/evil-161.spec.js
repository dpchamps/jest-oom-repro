
  describe("some-evil-spec=161", () => {
    it("evil-block-161", () => {
      window.evil_161 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  