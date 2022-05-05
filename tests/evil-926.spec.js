
  describe("some-evil-spec=926", () => {
    it("evil-block-926", () => {
      window.evil_926 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  