
  describe("some-evil-spec=505", () => {
    it("evil-block-505", () => {
      window.evil_505 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  