
  describe("some-evil-spec=942", () => {
    it("evil-block-942", () => {
      window.evil_942 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  