
  describe("some-evil-spec=718", () => {
    it("evil-block-718", () => {
      window.evil_718 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  