
  describe("some-evil-spec=654", () => {
    it("evil-block-654", () => {
      window.evil_654 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  