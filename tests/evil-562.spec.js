
  describe("some-evil-spec=562", () => {
    it("evil-block-562", () => {
      window.evil_562 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  